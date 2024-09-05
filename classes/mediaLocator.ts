import Loc from "./loc";
import Media from "./media";

class MediaLocator {
    constructor(public readonly medias: Media[], public readonly locations: Loc[]) {}
  
    findMediasForLocation(location: Loc): Media[] {
      return this.medias.filter((media) => media.isActiveInLocation(location));
    }
}

export default MediaLocator