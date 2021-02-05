function longestString(str1, str2){
  return [...(new Set([...str1, ...str2]))].sort().join('')
}

longestString("mubashir", "edabit") // "abdehimrstu")
longestString("pakistan", "airforce") // "acefiknoprst")
longestString("", "e") // "e")
longestString("", "") // "")
longestString("noooo", "yesssss") // "enosy")
longestString("aretheyhere", "yestheyarehere") // "aehrsty")
longestString("loopingisfunbutdangerous", "lessdangerousthancoding") // "abcdefghilnoprstu")
longestString("inmanylanguages", "theresapairoffunctions") // "acefghilmnoprstuy")
longestString("lordsofthefallen", "gamekult") // "adefghklmnorstu")
