const {expect} = require('chai'); //chai and expect to write test matchers
const {ethers} = require('hardhat');
//talks to the blockchain ethers, 

//describe comes from mocha really its just a function.
//this function is going to accept two arguments, the first one is counter
//the second one is going to be it stores count
//write an anonymous function in javascript like this
//pass in the behavior the function we want
//fetch the count
//check the count to make sure its what happened

describe('Counter', () => {
    let counter
    //dont want to redo a const before a foreach

    //since we're repeating ourselves we can do something for each
    beforeEach(async() => {
        const Counter = await ethers.getContractFactory('Counter')
        counter = await Counter.deploy('My Counter',1)
    })

    describe('Deployment', () => {
        it('sets the inital count', async() => {
        const count = await counter.count() 
        expect(count).to.equal(1) 
        //this gets the count
       //read this from the blockchain
        //deploy my counter initial counter is 1
        //check it with a matcher count to equal 1
        //this is ethers.js we do getContractFactory, going to fetch the counter for us
        //going to be able to do that with the hardhat framework
        // // constructor(string memory_name, uint _initialCount){
        // name= _name;
        // count =_initalCount;
        //have to await the ethers and counter 
        //have to use async promise call if youre going to use await
        //expect count.to.equal(1) is the initial count to =1 
})

      it('sets the inital name', async() => {
        const name = await counter.name() 
        expect(name).to.equal('My Counter') 
       //read this from the blockchain
        //deploy my counter initial counter is 1
        //check it with a matcher count to equal 1
        //this is ethers.js we do getContractFactory, going to fetch the counter for us
        //going to be able to do that with the hardhat framework
        // // constructor(string memory_name, uint _initialCount){
        // name= _name;
        // count =_initalCount;
        //have to await the ethers and counter 
        //have to use async promise call if youre going to use await
        //expect count.to.equal(1) is the initial count to =1 
      })
    })

    describe('Counting', () => {
        let transaction 

        it('reads the count from the "count" public variable', async( )=> {
            expect(await counter.count()).to.equal(1)
        })

        it('reads the count from the "getCount()" function', async( )=> {
             expect(await counter.getCount()).to.equal(1)
        })


        it('increments the count', async() => {
            transaction = await counter.increment() //want to wait for this transaction to finish
            await transaction.wait()

            expect(await counter.count()).to.equal(2)

            transaction = await counter.increment()
            await transaction.wait()

            expect(await counter.count()).to.equal(3)
        })


        it('decrements the count', async() => {
            transaction = await counter.decrement() //want to wait for this transaction to finish
            await transaction.wait()

            expect(await counter.count()).to.equal(0)

            //cannot decrement count below 0
            await expect(counter.decrement()).to.be.reverted 
        })

        it('reads the name from the "name" public variable', async( )=> {
            expect(await counter.name()).to.equal('My Counter')
        })

        it('reads the count from the "getName()" function', async( )=> {
             expect(await counter.getName()).to.equal('My Counter')
        })

        it('updates the name', async( )=> {
           transaction = await counter.setName('New Name')
           await transaction.wait()
           expect(await counter.name()).to.equal('New Name')
        })

    })
    //make a new function counting it increments the count and then await counter.increment()
})