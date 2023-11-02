interface IUser {
  email: string;
  name: string;
  password: string;
}

interface IIcon {
  id: number;
  name: string;
  symbol: string;
}

interface IColor {
  id: number;
  name: string;
  code: string;
}

interface ICategory {
  id: number;
  name: string;
  // user: IUser | string;
  userId?: number;
  isEditable: boolean;
  color: IColor;
  icon: IIcon;
  colorId: number;
  iconId: number;
}

// interface ICreateCategory {
//   id: number;
//   name: string;
//   userId?: number;
//   isEditable: boolean;
//   colorId: number;
//   iconId: number;
// }
