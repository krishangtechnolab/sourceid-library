export interface RiskScoreProps {
  verifiedEmail: Number;
  verifiedPhoneNumber: Number;
  IDVerification: Number;
  facialIdSelfiePhotoCheck: Number;
  geotagsAddressVerification: Number;
  utilityBillsOtherDocumentation: Number;
  sourceVerifiedReference1: Number;
  sourceVerifiedReference2: Number;
  sourceVerifiedReference3: Number;
  entityId: string;
}

export interface RiskRangeProps {
  High: Number;
  Medium: Number;
  Low: Number;
  entityId: string;
}

export interface AdminProps {
  username?: string;
  mobileNumber?: string;
  profileImage?: string;
  companyName?: string;
  country?: string;
  entityId?: string;
}
