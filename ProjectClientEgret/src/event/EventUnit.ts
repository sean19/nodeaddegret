/**
 * Created by jinghongwei on 29/11/2016.
 */
class EventUnit
{
    public _evt:EventEnum
    public _fc:Function
    public _tag:any
    public constructor(evt:EventEnum, fc:Function,tag:any)
    {
        this._evt = evt;
        this._fc = fc;
        this._tag = tag;
    }
    public callFunc(arr:Array<any> = null):void
    {
        this._fc.apply(this._tag,arr);
    }
    public disose():void{
        this._fc = null;
        this._tag = null;
    }
}