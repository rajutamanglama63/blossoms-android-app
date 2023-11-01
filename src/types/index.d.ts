interface IUser {
  email: string;
  name: string;
  password: string;
}

interface IIcon {
  id: string;
  name: string;
  symbol: string;
}

interface IColor {
  id: string;
  name: string;
  code: string;
}

interface ICategory {
  id: string;
  name: string;
  user: IUser | string;
  isEditable: boolean;
  color: IColor;
  icon: IIcon;
}
