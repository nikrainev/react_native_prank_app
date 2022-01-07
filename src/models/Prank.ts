import Realm from 'realm';

export interface IInput {
    name: string
}
class Prank extends Realm.Object {
    _id!: Realm.BSON.ObjectId;
    name!: string;

    static generate(input:IInput) {
        return {
            _id: new Realm.BSON.ObjectId(),
            name: input.name
        };
    }

    // To use a class as a Realm object type, define the object schema on the static property "schema".
    static schema = {
        name: 'Prank',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            name: 'string',
        },
    };
}

export default Prank;
