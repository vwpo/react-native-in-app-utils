require 'json'
pjson = JSON.parse(File.read('package.json'))

Pod::Spec.new do |s|

  s.name            = pjson["name"]
  s.version         = pjson["version"]
  s.homepage        = "https://github.com/vwpo/react-native-in-app-utils"
  s.summary         = pjson["description"]
  s.license         = pjson["license"]
  s.author          = { "Chirag Jain" => "jain_chirag04@yahoo.com" }
  s.platform        = :ios, "9.0"
  s.source          = { :git => "https://github.com/vwpo/react-native-in-app-utils.git", :tag => "#{s.version}" }
  s.source_files    = 'InAppUtils/*.{h,m}'

  s.dependency 'React'

end
