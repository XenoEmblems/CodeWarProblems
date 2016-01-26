# http://www.codewars.com/kata/summations-1/ruby

def summation(x)
  i = 0
  sum = 0
  if x.is_a? Integer
      while i <= x
        sum = sum + i
        i += 1
      end
  else
    return 'Invalid Value'
  end
  return sum
end