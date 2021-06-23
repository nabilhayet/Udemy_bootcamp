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