function Todb()
{
    this.form = $('#tomong');
    this.button=$('#toclick');
    this.intial();
} 

Todb.prototype.intial = function()
{
  //console.log("ssssssssssssssssss");
  console.log(this.form);
}


var todb=new Todb();