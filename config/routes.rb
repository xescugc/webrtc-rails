WebrtcRails::Application.routes.draw do
  root to: 'home#index'

  get '/webcam_audio_video'     =>  'home#webcam_audio_video'  
  get '/webrtc_same_page'       =>  'home#webrtc_same_page' 
  get '/stream_arbitrary_data'  =>  'home#stream_arbitrary_data' 
  get '/client_to_client'       =>  'home#client_to_client' 

end
