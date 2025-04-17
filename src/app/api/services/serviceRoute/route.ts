import { NextResponse } from "next/server";
import data from "../../../../../public/data/services.json";

interface SubService {
  key?: string;
  [key: string]: any;
}

interface ServiceOption {
  subServices: SubService[];
  [key: string]: any;
}

interface Data {
  Service_options: ServiceOption[];
}

export async function GET(
  request: Request,
  { params }: { params: { serviceRoute: string } }
) {
  const serviceRoute = params.serviceRoute;

  let foundService: SubService | null = null;
  (data as Data).Service_options.forEach((option: ServiceOption) => {
    option.subServices.map((subService: SubService) => {
      if ('key' in subService && subService.key === serviceRoute) {
        console.log(subService);
        foundService = subService;
      }
    });
  });

  if (foundService) {
    console.log(foundService);
    return NextResponse.json(foundService); 
  } else {
    return NextResponse.json(
      { error: "Service not found" },
      { status: 404 } 
    );
  }
}
