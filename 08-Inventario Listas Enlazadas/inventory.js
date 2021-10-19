export default class Inventory{

    constructor() {
        this._start = null;
    }

    add(product){
        if (this._start == null){
            this._start = product;
        }
        else if(this.search(product._getCode()) == null){
            let aux = this._start;
            while(aux._next != null){
                aux = aux._next;
            }
            aux._next = product;
        }
        else{
            return null;
        }
    }

    delete(code){
        let del = null;

        if(code == this._start._getCode()){
            del = this._start;
            this._start = this._start._getNext();
            del._setNext(null);
            return del;
        }

        let aux = this._start;
        while(aux._getNext() != null){
            if(aux._getNext()._getCode() == code){
                del = aux._getNext();
                aux._setNext(aux._getNext()._getNext());
                del._setNext(null);
                return del;
            }
            else{
                aux = aux._getNext();
            }
            return null;
        }
    }

    search(code){
        let aux = this._start;
        while(aux != null){
            if(aux._getCode() == code){
                return aux;
            }
            else{
                aux = aux._getNext();
            }
        }
        return null;
    }

    list(){
        return this._start;
    }

    invertList(){
        let aux = null;
        let aux2 = null;

        while(this._start != null){
            aux2 = this._start._getNext();
            this._start._setNext(aux);
            aux = this._start;
            this._start = aux2;
        }

        return this._start = aux;
    }

    insert(product, position){
        if(position == 1){
            product._setNext(this._start);
            this._start = product;
            return this._start;
        }

        let aux = this._start;
        let count = 2;

        while(aux){
            if(count == position){
                product._setNext(aux._getNext());
                aux._setNext(product);
                return this._start;
            }

            aux = aux._getNext();
            count++;
        }

    return null;
    }


}