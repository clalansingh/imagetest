class EntriesController < ApplicationController
  def new
    @upload = Upload.new
    @entry = Entry.new
  end
  
  def create
    @entry = Entry.create(params[:entry])
  end
end
