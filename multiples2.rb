# http://www.codewars.com/kata/multiples2/ruby

def multiples(x)
  if x % 49 == 0 and x % 3 == 0
    return "Fang"
  elsif x % 7 == 0
    return "Fizz"
  elsif x % 15 == 0
    return "Foo"
  else
    return "Far"
  end 
end