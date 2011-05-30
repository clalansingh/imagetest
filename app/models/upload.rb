class Upload < ActiveRecord::Base
  
  belongs_to :entry
  has_attached_file :file,
     :styles => {
       :thumb=> "100x100#",
       :small  => "150x150>" },
     :url => "/:class/:attachment/:id_:style_:basename.:extension"
  
end
