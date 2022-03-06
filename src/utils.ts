export class Utils {

  static addRemoveArrayItem(items, item): any[] {
    if(!items?.length){
      items=[];
    }
    const found = items.findIndex(el => el === item);
    if (found >= 0) {
      items.splice(found, 1);
    } else {
      items.push(item);
    }
    return items;
  }

  static roundNumber(value: number, decimals: number) {
    decimals = decimals || 0;
    return (Math.floor(value * Math.pow(10, decimals)) / Math.pow(10, decimals));
  };

}
