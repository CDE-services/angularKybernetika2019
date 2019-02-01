export class Osoba {
  public Id: number;
  public Meno: string;
  public Priezvisko: string;

  constructor(Id: number, Meno: string, Priezvisko: string) {
    this.Id = Id;
    this.Meno = Meno;
    this.Priezvisko = Priezvisko;
  }
}

export class Auto {
  public Id: number;
  public Ecv: string;
  public Poznamka: string;

  constructor(Id: number, Ecv: string, Poznamka: string) {
    this.Id = Id;
    this.Ecv = Ecv;
    this.Poznamka = Poznamka;
  }
}
