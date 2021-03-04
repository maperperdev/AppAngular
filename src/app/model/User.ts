export class User {
  constructor(
    public login: string,
    public nombre: string,
    public apellido1: string,
    public apellido2: string,
    public fechaNac: Date,
    public password: string,
    public id?: number,
  ) { }

}