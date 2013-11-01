WebrtcRails::Application.routes.draw do
  root to: 'home#index'

  get '/webcam_audio_video' =>  'home#webcam_audio_video'  
  get '/webrtc_same_page'   =>  'home#webrtc_same_page' 
end
