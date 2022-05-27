class Product{
    id
    image;
    price;
    name;
    amount;
    constructor(id,image,price,name,amount){
        this.id=id;
        this.image=image;
        this.price=price;
        this.name=name;
        this.amount=amount;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id=id;
    }
    getPrice(){
        return this.price;
    }
    getName(){
        return this.name;
    }
    getAmount(){
        return this.amount;
    }
    getImage(){
        return this.image;
    }

    setPrice(newPrice){
        this.price=newPrice;
    }
    setName(newName){
        this.name=newName;
    }
    setAmount(newAmount){
        this.amount=newAmount;
    }
    setImage(newImage){
        this.image=newImage;
    }
}