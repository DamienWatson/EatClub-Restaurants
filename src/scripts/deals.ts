import { DealType, Hours } from "../types/restaurants";
import { checkTimeBeforeTime } from "./helpers";

export const getTags = (deals: Array<DealType>) => {
  return deals.reduce((tags: Array<string>, deal) => {
    const newTag: string = deal.dineIn === 'true' ? 'Dine In' : 'Takeaway';

    if (tags.includes(newTag)) {
      return tags;
    }

    return [
      ...tags,
      newTag,
    ];
  }, [])
  .sort();
};

export const availableMessage = (hours: Hours, openTime?: string, closeTime?: string) => {
    let invalidTime = false;

    if (openTime !== undefined) {
      if (!checkTimeBeforeTime(openTime, hours.open)) {
        invalidTime = true;
      }
    }

    switch(true) {
      case invalidTime:
        return 'Enquire within'
      case (!openTime && closeTime !== undefined):
        return `Between ${hours.open} - ${closeTime}`;
      case (openTime !== undefined && !closeTime):
        return `Between $openTIme} - ${hours.close}`;
      case (openTime !== undefined && closeTime !== undefined):
        return `Between ${openTime} - ${closeTime}`;
      default:
        return 'Anytime today';
    };
  };
