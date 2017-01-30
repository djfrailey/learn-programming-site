export class Invitee {
  constructor(
    public name: string,
    public email: string,
    public position: string,
    public field: string,
    public skillLevel: string
  ) { }

  public toString(): void {
    console.log(`${this.name} is a ${this.position} in ${this.field}!`)
  }
}