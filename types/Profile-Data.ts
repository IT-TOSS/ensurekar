interface identity {
    id: string | number;
    pan: string;
    aadhar: string;
    din: string;
    addressProof: string;
    addressProofName: string;
    nationality?:string;
  }
  interface personalInfo {
    id: string;
    userName:string;
    username:string;
    
picture?:string;
    company: string;
    DOB: string;
    father: string;
    sex: string;
    maritalStatus: string;
    maritalStatusName: string;
  }
  interface contact {
    id: string;
    secondaryContact: string;
    email?:string
    secondaryEmail: string;
    address: string;
    state: string;
    city: string;
    pin: string;
  }
  interface bank {
    id: string;
    bank: string;
    account: string;
    ifsc: string;
  }
  interface ProfileData {
    id: string;
    name: string;
    isOrganisation: Boolean;
    organisationType: string;
    orgType: string;
    identity: identity;
    personal: personalInfo;
    contact: contact;
    email?:string;
    bank: bank;
    firstName?:string;
    lastName?:string;

  }

  export type { ProfileData, identity, personalInfo, contact, bank };