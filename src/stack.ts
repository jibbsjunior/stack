interface stackInterface {
    data: [],
    top: number;
}

class Stack implements stackInterface {
    data: [];
    top: number;
    
    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(element: []) {
        if (this.data.includes(element)) return console.log("Sorry! this elements currently exist on stack!");
        

        if (this.length() >= 10) {
            return console.log("Sorry! this stack is currently full and can\'t take in new elements!");
        } else {
            this.data[this.top] = element;
            this.top++;
        }
    }

    length() {
        return this.top;
    }

    peek() {
        return this.data[this.top - 1];
    }

    isEmpty() {
        return this.top === 0;
    }

    isFull() {
        if (this.length() === 10) {
            return true;
        } else {
            return false;
        }
    }

    reverse() {
        this._reverse(this.top - 1);
    }

    _reverse(index: number) {
        if (index != 0) this._reverse(index - 1);

        console.log(this.data[index]);
        
    }

    pop() {
        if (this.isEmpty() === false) {
            this.top = this.top - 1;
            return this.data.pop();
        } else {
            return console.log("Whooops! the stack is currently empty and there's no element to remove!!");
            
        }
    }

    print() {
        let top = this.top - 1;
        while (top >= 0) {
            console.log(this.data[top]);
            top--;
            
        }
    }
}