WebrtcRails::Application.routes.draw do
  root to: 'home#index'

  get '/client_to_client'       =>  'home#client_to_client' 

end
