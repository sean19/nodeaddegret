/**
 * Created by jinghongwei on 29/11/2016.
 */
class EventCenter
{
    private _arr_events:Array<EventUnit> = [];
    public addCallBack(evt:EventEnum, fc:Function,tag:any):void
    {
        var arr:Array<EventUnit> = this.getUnit2(evt,fc,tag);
        if(arr.length == 0)
        {
            var unit:EventUnit = new EventUnit(evt,fc,tag);
            this._arr_events.push(unit);
        }
    }
    public removeCallBack(evt:EventEnum, fc:Function,tag:any):void
    {
        var arr:Array<EventUnit> = this.getUnit2(evt,fc,tag);
        for(var i:number = 0;i<arr.length;i++)
        {
            var unit:EventUnit = arr[i];
            this._arr_events.splice(this._arr_events.indexOf(unit),1);
            unit.disose();
        }
    }
    public callEvent(evt:EventEnum,arrparam:Array<any> = null):void
    {
        var arr:Array<EventUnit> = this.getUnit(evt);
        for(var i:number = 0;i<arr.length;i++)
        {
            var unit:EventUnit = arr[i];
            unit.callFunc(arrparam);
        }
    }

    protected getUnit(evt:EventEnum):Array<EventUnit>
    {
        var arr:Array<EventUnit> = [];
        var len:number = this._arr_events.length;
        for(var i:number = 0;i<len;i++)
        {
            var unit:EventUnit = this._arr_events[i];
            if(unit._evt == evt)
            {
                arr.push( unit);
            }
        }
        return arr;
    }
    protected getUnit2(evt:EventEnum, fc:Function,tag:any):Array<EventUnit>
    {
        var arr:Array<EventUnit> = [];
        var len:number = this._arr_events.length;
        for(var i:number = 0;i<len;i++)
        {
            var unit:EventUnit = this._arr_events[i];
            if(unit._evt == evt && unit._fc == fc && unit._tag == tag)
            {
                arr.push( unit);
            }
        }
        return arr;
    }
}