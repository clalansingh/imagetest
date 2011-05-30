class UploadsController < ApplicationController
  
  def create
    @upload = Upload.create(params[:upload])
    redirect_to :action => "index"
  end
  
  def index
    @upload = Upload.new
    @uploads = Upload.order("created_at desc")
  end
  
end
