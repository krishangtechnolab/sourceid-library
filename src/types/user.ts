export interface UserProps {
  id: string;
  name: string;
  email: string;
}

export interface PatchUserFieldsProps {
  name?: string;
  email?: string;
}

export interface getAllUsersProps {
  limit: Number;
  offset: Number;
  sortOrder: string;
  sortField: string;
  search: string;
  filterbyRisk: string;
}
