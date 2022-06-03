export class User {
  constructor(public email: string,
              public id: string,
              // public tokens: string,
              private _token: string,
              private _tokenExpirationDate: Date) {
  }

  get token() {
    if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
      // console.log(this._tokenExpirationDate)
      // console.log(new Date())
      return null;
    }
    // console.log('s: ' + this.token)
    return this._token;
  }
}
