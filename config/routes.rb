WebrtcRails::Application.routes.draw do
  root to: 'home#index'

  get '/:room'       =>  'home#room' 

end
