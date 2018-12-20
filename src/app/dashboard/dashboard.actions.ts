export class QueryCharacters {
  static type = '[Dashboard] QueryCharacters';
}
export class QueryAffiliations {
  static type = '[Dashboard] QueryAffiliations';
}
export class QueryOrigins {
  static type = '[Dashboard] QueryOrigins';
}
export class UpdateAffiliationFilter {
  static type = '[Dashboard] UpdateAffiliationFilter';
  constructor(public filter: string) {}
}
export class UpdateOriginFilter {
  static type = '[Dashboard] UpdateOriginFilter';
  constructor(public filter: string) {}
}
