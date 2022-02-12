class Accordeon{
    static ITEM_CLASS = 'accordeon-item';
    static ITEM_TITLE_CLASS = 'accordeon-item-title';
    static ITEM_BODY_CLASS = 'accordeon-item-body';
    static OPEN_CLASS = 'open';
    constructor(el){
        this._el= el;
        this.bindClasses(el);
        this.bindCEvents(el);
    }

    clickHandler = (e) =>{
        if(e.target.classList.contains(ITEM_TITLE_CLASS)){
            const itemEl = this.findItem(e.target);
        this.toggleItem(e.target);   
        }
    }
    bindClasses(el){
        Array.prototype.forEach.call(
            el.children , (accordeonItem) => {
                accordeonItem.classList.add (Accordeon.ITEM_CLASS);

                const [titleEl, bodyEl] = accordeonItem.children;
                titleEl.children[0].classList.add (Accordeon.ITEM_TITLE_CLASS);
                bodyEl.classList.add (Accordeon.ITEM_BODY_CLASS );
            });
    }

    bindCEvents(el){
        el.addEventListener('click', this.clickHandler);
    }
    clickHandler(e){
        console.log(this);
        if(e.target.classList.contains(ITEM_TITLE_CLASS)){
            const itemEl = this.findItem(e.target);
        this.toggleItem(e.target);   
        }
    }

    toggleItem(itemEl){
            const bodyEl =  this.findBody(itemEl);
            const visibleBody = this._el.querySelectorAll('.'+ Accordeon.OPEN_CLASS);
 
            this.hideBody(visibleBody);
            this.toggleBody(bodyEl)
            
    }
    hideBody(body){
        body.classList.remove(Accordeon.OPEN_CLASS);
    }
    toggleBody(body){
        bodyEl.classList.toggle(Accordeon.OPEN_CLASS);
    }
    findItem(el){
        return e.closest('.' + Accordeon.ITEM_CLASS);
    }

    findBody(el){
        const itemEl = this.findItem(el);
        return itemEl.querySelector('.' + Accordeon.ITEM_BODY_CLASS);
    }
}
