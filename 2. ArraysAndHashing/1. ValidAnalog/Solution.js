// https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {
      if( s.length != t.length) return false;
  
      const mp = {};
  
      for( i = 0; i < s.length; i++){
  
      // prepare freq map of s
      if( mp[s[i]]){
          // if it is defined we land here
          mp[s[i]] += 1;
      } else{
          // if it is undefined we land here
           mp[s[i]] = 1;
      }
      
      }
  
           // this loop matches the characters inside the string t, with the map
           for( i = 0; i < t.length; i++){
              if( mp[t[i]] === undefined){
                   // there is a character in t, which is not present in s
                   return false;
              } else{
                  mp[t[i]] -= 1;// if occ found, dec freq
                  if( mp[t[i]] == 0){
                      delete mp[t[i]];
                  }
              }
           }
      return Object.keys(mp).length == 0;
  };