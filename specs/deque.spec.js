const Deque = require('../src/deque');

describe('Deque', () => {
    describe('Deque Constructor', () => {
        it('Create new Deque', () => {
            const Deque = new Deque();

            assert.equal(Deque.data, []);
        });
    });

    describe('Deque push function', () => {
        beforeEach( () => { 
            const Deque = new Deque();
            const arr = [1, 2, 3, 4, 5];
            Deque.push(true, arr);
        });

        it('Push items to the clean Deque', () => {
            assert.equal(Deque.data, [1, 2, 3, 4, 5]);
        });

        it('Push items with left = false argument', () => {
            const arr2 = [10, 20, 30];

            Deque.push(false, arr2);

            assert.equal(Deque.data, [10, 20, 30, 1, 2, 3, 4, 5]);
        });

        it('Push items with left = true argument', () => {
            const arr2 = [10, 20, 30];

            Deque.push(true, arr2);

            assert.equal(Deque.data, [1, 2, 3, 4, 5, 10, 20, 30]);
        });

    });

    describe('Deque pop function', () => {
        beforeEach( () => { 
            const Deque = new Deque();
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            const left = true;
            const right = false;

            Deque.push(left, arr);
        });
        
        it('Pop n first(left = true) items', () => {
            const n = 5;

            const returned = Deque.pop(n, left);

            assert.equal(returned, [0, 1, 2, 3, 4]);
            assert.equal(Deque.data, [5, 6, 7, 8, 9]);
        });

        it('Pop n last(left = false) items', () => {
            const n = 5;

            const returned = Deque.pop(n, right);
            
            assert.equal(returned, [5, 6, 7, 8, 9]);
            assert.equal(Deque.data, [0, 1, 2, 3, 4]);
        });

        it('Pop n first(left = true or false) items, n more than deque length or n equal deque length', () => {
            const n = 20;

            const returned = Deque.pop(n, right);
            
            assert.equal(returned, arr);
            assert.equal(Deque.data, []);
        });

        it('Pop n first(left = true or false) items, n = 0', () => {
            const n = 0;

            const returned = Deque.pop(n, right);
            
            assert.equal(returned, []);
            assert.equal(Deque.data, arr);
        });
    });

    describe('Deque top function', () => {
        beforeEach( () => { 
            const Deque = new Deque();
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            const left = true;
            const right = false;

            Deque.push(left, arr);
        });
        
        it('Top first(left = true) item', () => {
            const returned = Deque.top(left);

            assert.equal(returned, 0);
            assert.equal(Deque.data, arr);
        });

        it('Top last(left = false) item', () => {
            const returned = Deque.top(right);
            
            assert.equal(returned, 9);
            assert.equal(Deque.data, arr);
        });

        it('Top first or last(left || false) item', () => {
            Deque.pop(Deque.data.length);
            const returned1 = Deque.top(right);
            const returned2 = Deque.top(left);
            
            assert.equal(returned1, undefined);
            assert.equal(returned2, undefined);
            assert.equal(Deque.data, []);
        });
    });

    describe('Deque merge function', () => {
        beforeEach( () => { 
            const Deque1 = new Deque();
            const arr = [0, 1, 2, 3, 4];
            const Deque2 = new Deque();
            const arr2 = [5, 6, 7, 8, 9];
            const left = true;
            const right = false;

            Deque1.push(left, arr);
            Deque2.push(left, arr2);
        });
        
        it('Merge Deque2 with none clear data to left side Deque1 with none clear data', () => {
            const result = Deque1.merge(Deque2, left)
            assert.equal(result, arr.concat(arr2));
        });

        it('Merge Deque2 deque with none clear data to right side Deque1 with none clear data', () => {
            const result = Deque1.merge(Deque2, right)
            assert.equal(result.data, arr2.concat(arr));
        });

        it('Merge Deque2 deque with clear data to left or right side Deque1 with none clear data', () => {
            Deque2.pop(Deque2.data.length);
            const result1 = Deque1.merge(Deque2, left)
            const result2 = Deque1.merge(Deque2, right)
            assert.equal(result1.data, Deque1.data);
            assert.equal(result2.data, Deque1.data);
        });
    });
})
