interface IUser {
  email: string;
  name: string;
  password: string;
}

interface IIcon {
  name: string;
  id: string;
  symbol: string;
}

interface IColor {
  name: string;
  id: string;
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
