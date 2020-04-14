class BaseBinaryHeap {
    constructor() {
        this.internal_values = [];
    }

    get values() {
        const result = [];
        this.internal_values.forEach(element => {
            result.push(element.val);
        });
        return result;
    }

    insert(value, priority) {
        this.internal_values.push({ val: value, p: priority });
        this._bubble_up(this.internal_values.length - 1);
    }

    shift() {
        if (this.internal_values.length === 0) {
            return null;
        }

        if (this.internal_values.length === 1) {
            return this.internal_values.pop();
        }

        const return_element = this.internal_values[0];
        const last_element = this.internal_values.pop();
        this.internal_values[0] = last_element;
        this._bubble_down(0);
        return return_element;
    }

    _bubble_up(index) {
        if (index > 0) {
            const parent_index = Math.floor((index - 1) / 2);
            if (this.order(this.internal_values[parent_index].p, this.internal_values[index].p) > 0) {
                const temp = this.internal_values[parent_index];
                this.internal_values[parent_index] = this.internal_values[index];
                this.internal_values[index] = temp;
                this._bubble_up(parent_index);
            }
        }
    }

    order(_priority_one, _priority_two) {
        throw new Exception("need to implement order function on your class, that returns -1 || 0 || 1");
    }

    _bubble_down(index) {
        if (index < this.internal_values.length - 1) {
            const lft_ch_index = (index * 2) + 1;
            const rgt_ch_index = (index * 2) + 2;
            let children_order = 0;

            if (!this.internal_values[rgt_ch_index]) {
                children_order = -1;
            } else {
                children_order = this.order(this.internal_values[lft_ch_index].p, this.internal_values[rgt_ch_index].p);
            }


            if (children_order < 0 && this.order(this.internal_values[lft_ch_index].p, this.internal_values[index].p) < 0) {
                const temp = this.internal_values[lft_ch_index];
                this.internal_values[lft_ch_index] = this.internal_values[index];
                this.internal_values[index] = temp;
                this._bubble_down(lft_ch_index);
            } else if (children_order > 1 && this.order(this.internal_values[rgt_ch_index].p, this.internal_values[index].p) > 0) {
                const temp = this.internal_values[rgt_ch_index];
                this.internal_values[rgt_ch_index] = this.internal_values[index];
                this.internal_values[index] = temp;
                this._bubble_down(rgt_ch_index);
            }
        }
    }
}

module.exports = BaseBinaryHeap;