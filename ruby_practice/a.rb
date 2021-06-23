require 'pry'

phrase = "Hello world"
puts phrase.upcase

first_number = 7
second_number = 14

sum = first_number + second_number

puts sum

def print_name(name)
  puts "In 2016, the president was #{name}"
end 

print_name("Nabil Hayet")

def greeting(name = "Nabil",language)
    puts "Hello #{name}, Are you a #{language} programmer?"
end 

greeting("Python")

3.times { print "Hello" }


3.times { puts "Hello" }

def return_name 
    "Jasmin Trina"
end 

def parrot(name="Squawk!")
    binding.pry 
    puts name
    name 
end 

parrot("Wack Wack")

all_odd = true
[1,2,3].each do |number|
  if number.even? # Will evaluate to false for 1, true for 2, false for 3
    all_odd = false
  end
end
all_odd 

all_odd = [1,3].all? do |number|
    number.odd? # Will evaluate to true for 1, true for 3
end #=> true
all_odd

[1,3].none?{|i| i.even?} #=> true

[1,2,100].any?{|i| i > 99} #=> true

the_numbers = [4,8,15,16,23,42]
the_numbers.include?(42)   #=> true

matches = []
[1,2,3,4,5].each do |i|
  matches << i if i.even? # add i to the matches array if it is even
end #=> [1,2,3,4,5]
matches #=> [2,4]

[1,2,3,4,5].select{|i| i.odd?} #=> [1,3,5]
 
[1,2,3].select{|i| i.is_a?(String)} #=> []

[1,2,3].detect{|i| i.odd?} #=> 1

[1,2,3].find{|i| i.odd?} #=> 1

[1,2].reject{|i| i.even?} #=> [1]