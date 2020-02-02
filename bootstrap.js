module.exports = class telosBootstrap{
  constructor(config)
  {
    this.funcs=[
      {
          name:'createUser',
          title:'this is sample' ,
          inputs:[
			{
				name:'user',
				type:'UserInterface',
				nullable:false
			}
          ]
      }, 
	  
	  
	   
    ]
    this.auth=[ 
        ]
  }
}