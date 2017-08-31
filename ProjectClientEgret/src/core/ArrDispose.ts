
 abstract class  ArrDispose
{
    protected arr:IItem[] = [];
    
    public getItemList():IItem[]
    {
        return this.arr;
    }
    public getItem(id:number):IItem
    {
        for(var i:number = 0 ;i<this.arr.length;i++)
        {
            var item:IItem = this.arr[i];
            if(item.getid() == id)
            {
                return item;
            }
        }
        return <any>null;
    }
    public addItem(item:IItem):void
    {
        this.arr.push(item);
    }
    public removeItem(id:number):void
    {
        for(var i:number = 0 ;i<this.arr.length;i++)
        {
            var item:IItem = this.arr[i];
            if(item.getid() == id)
            {
                this.arr.splice(i,1)
                return ;
            }
        }
    }
    protected clearItems():void
    {
        for(var i:number = 0 ;i<this.arr.length;i++)
        {
           var item:IItem = this.arr[i];
           item.dispose();
        }
        this.arr = [];
    }
    public dispose():void
    {
        this.clear();
        this.clearItems();
    }
    protected clear():void
    {
        throw "has not clear";
    }

}