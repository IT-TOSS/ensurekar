import { NextRequest, NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';

// ===========================================================
// 📦 PACKAGES_OFFERS CRUD API
// ===========================================================

// ===========================================================
// ✅ GET (All or One)
// ===========================================================
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const db = await CreateConnection();

    let query: string;
    let params: any[] = [];

    if (id) {
      query = 'SELECT * FROM packages_offers WHERE id = ?';
      params = [parseInt(id)];
    } else {
      query = 'SELECT * FROM packages_offers ORDER BY id DESC';
    }

    const [rows] = await db.query(query, params);

    if (Array.isArray(rows) && rows.length > 0) {
      return NextResponse.json(rows, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });
    } else {
      return NextResponse.json(
        { message: 'No records found' },
        {
          status: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        }
      );
    }
  } catch (error) {
    console.error('Error fetching packages:', error);
    return NextResponse.json(
      {
        error: 'Database connection failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// ===========================================================
// ✅ POST (Create)
// ===========================================================
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data) {
      return NextResponse.json(
        { error: 'Invalid JSON input' },
        { status: 400 }
      );
    }

    const db = await CreateConnection();

    const planName = data.planName ?? '';
    const Status = data.Status ?? 'Active';
    const Description = data.Description ?? '';
    const Price = parseFloat(data.Price ?? 0);
    const PriceAfterDiscount = parseFloat(data.PriceAfterDiscount ?? 0);
    const instalments = data.instalments ?? '';
    const Features = data.Features ?? '';
    const page = data.page ?? '';
    const navigationUrl = data.navigationUrl ?? '';
    const actionType = data.actionType ?? '';
    const customPlanId = data.customPlanId ?? '';
    const customPlanName = data.customPlanName ?? '';
    const customPrice = data.customPrice ?? '';
    const enableSelectButton = parseInt(data.enableSelectButton ?? 0);
    const selectButtonText = data.selectButtonText ?? '';
    const offerTitle = data.offerTitle ?? '';
    const offerDescription = data.offerDescription ?? '';
    const discountPercentage = parseFloat(data.discountPercentage ?? 0);
    const validUntil = data.validUntil ?? null;
    const isOfferActive = parseInt(data.isOfferActive ?? 1);
    const offerPrice = parseFloat(data.offerPrice ?? 0);
    const recordType = data.recordType ?? 'package';
    const parentPackageId = data.parentPackageId ? parseInt(data.parentPackageId) : null;

    const query = `INSERT INTO packages_offers (
      planName, Status, Description, Price, PriceAfterDiscount, instalments,
      Features, page, navigationUrl, actionType, customPlanId, customPlanName,
      customPrice, enableSelectButton, selectButtonText, offerTitle,
      offerDescription, discountPercentage, validUntil, isOfferActive,
      offerPrice, recordType, parentPackageId
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const params = [
      planName,
      Status,
      Description,
      Price,
      PriceAfterDiscount,
      instalments,
      Features,
      page,
      navigationUrl,
      actionType,
      customPlanId,
      customPlanName,
      customPrice,
      enableSelectButton,
      selectButtonText,
      offerTitle,
      offerDescription,
      discountPercentage,
      validUntil,
      isOfferActive,
      offerPrice,
      recordType,
      parentPackageId,
    ];

    const [result]: any = await db.query(query, params);

    return NextResponse.json(
      {
        success: true,
        message: 'Package/Offer created',
        id: result.insertId,
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (error) {
    console.error('Error creating package:', error);
    return NextResponse.json(
      {
        error: 'Insert failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// ===========================================================
// ✅ PUT (Update)
// ===========================================================
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Missing id for update' },
        { status: 400 }
      );
    }

    const data = await request.json();

    if (!data) {
      return NextResponse.json(
        { error: 'Invalid JSON input' },
        { status: 400 }
      );
    }

    const db = await CreateConnection();

    // Build update fields dynamically
    const updates: string[] = [];
    const values: any[] = [];

    // List of allowed fields to update
    const allowedFields = [
      'planName',
      'Status',
      'Description',
      'Price',
      'PriceAfterDiscount',
      'instalments',
      'Features',
      'page',
      'navigationUrl',
      'actionType',
      'customPlanId',
      'customPlanName',
      'customPrice',
      'enableSelectButton',
      'selectButtonText',
      'offerTitle',
      'offerDescription',
      'discountPercentage',
      'validUntil',
      'isOfferActive',
      'offerPrice',
      'recordType',
      'parentPackageId',
    ];

    for (const key of allowedFields) {
      if (data.hasOwnProperty(key) && data[key] !== null && data[key] !== undefined) {
        updates.push(`${key} = ?`);
        // Convert numeric fields
        if (key === 'Price' || key === 'PriceAfterDiscount' || key === 'discountPercentage' || key === 'offerPrice') {
          values.push(parseFloat(data[key]));
        } else if (key === 'enableSelectButton' || key === 'isOfferActive') {
          values.push(parseInt(data[key]));
        } else if (key === 'parentPackageId') {
          values.push(parseInt(data[key]));
        } else {
          values.push(data[key]);
        }
      }
    }

    if (updates.length === 0) {
      return NextResponse.json(
        { message: 'No fields to update' },
        { status: 200 }
      );
    }

    const query = `UPDATE packages_offers SET ${updates.join(', ')} WHERE id = ?`;
    values.push(parseInt(id));

    await db.query(query, values);

    return NextResponse.json(
      {
        success: true,
        message: 'Package/Offer updated',
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (error) {
    console.error('Error updating package:', error);
    return NextResponse.json(
      {
        error: 'Update failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// ===========================================================
// ✅ DELETE (Delete Package)
// ===========================================================
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Missing id for delete' },
        { status: 400 }
      );
    }

    const db = await CreateConnection();

    const query = 'DELETE FROM packages_offers WHERE id = ?';
    const [result]: any = await db.query(query, [parseInt(id)]);

    // Check if any row was affected
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: 'Package not found or already deleted' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Package/Offer deleted successfully',
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (error) {
    console.error('Error deleting package:', error);
    return NextResponse.json(
      {
        error: 'Delete failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// ===========================================================
// ✅ OPTIONS (CORS Preflight)
// ===========================================================
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}

