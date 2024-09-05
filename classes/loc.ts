class Loc {
    children: Array<Loc>

    constructor(public readonly name: string) {
        this.children = []
    }

    addChild(child: Loc){
        this.children.push(child);
    }

    isChildOf(other: Loc): boolean {
        return this.name.startsWith(other.name);
    }

    toString(): string {
        return this.name;
    }
}

export default Loc;