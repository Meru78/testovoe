import Loc from "./loc";
class Media {
    constructor(public readonly name: string, public readonly locations: Loc[]) {}

    isActiveInLocation(location: Loc): boolean {
        return this.locations.some((l) => location.isChildOf(l));
    }

    toString(): string {
        return this.name;
    }
}
export default Media;