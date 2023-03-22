// complete the given function

function palindrome(str){

	 var l=str.length;
		  var start=0;
		  var end=l-1;
		  char arr[]=new char[l];
		  for(var i=0;i<l;i++)
			  {
				  arr[i]=str.charAt(i);
				  if(arr[i]>='A' && arr[i]<='Z')
				  {
					  arr[i]=(char)(arr[i]+32);
				  }
			  }
		  while(start<end)
			  {
				  while(start<end && (arr[start]<'a' || arr[end]>'z'))
					  {
						  start++;
					  }
				  while(start<end && (arr[end]<'a' || arr[start]>'z'))
					  {
						  end--;
					  }
				  if(start<end && arr[start]!=arr[end])
				  {
					  return false;
				  }
				  start=start+1;
				  end=end-1;
			  }
		  return true;
}
module.exports = palindrome
