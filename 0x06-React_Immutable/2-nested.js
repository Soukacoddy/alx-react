import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const Obj = fromJS(object);
  return Obj.getIn(array, undefined);
}
