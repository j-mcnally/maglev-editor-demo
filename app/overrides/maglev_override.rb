Maglev::Engine.class_eval do

  def self.vite_ruby
    @root_vite_ruby ||= ::ViteRuby.new(root: Rails.root, mode: Rails.env)
  end

end
