import { Sorter } from './sorter';
import { NumbersCollection } from './numbers-collection';
import { CharactersCollection } from './characters-collection';
import { LinkedList } from './linked-list';

let sorter;

// Number Collection Sorting
const numbersCollection = new NumbersCollection([10, -3, 0, 5]);
sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

// Character Collection Sorting
const charactersCollection = new CharactersCollection('XaarrAB');
sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);