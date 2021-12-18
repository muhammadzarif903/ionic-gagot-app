export class Utils {

  static addRemoveListItem(items, item) {
    const found = items.findIndex(el => el === item);
    if (found > 0) {
      items.splice(found, 1);
    } else {
      items.push(item);
    }
  }

}
