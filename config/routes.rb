WebrtcRails::Application.routes.draw do
  root to: 'home#index'

  get '/step1' => 'home#step1'  
end
