types = ::Maglev::Section::Setting::REGISTERED_TYPES.dup
::Maglev::Section::Setting.send(:remove_const, :REGISTERED_TYPES)

::Maglev::Section::Setting::REGISTERED_TYPES = types.concat(['enhanced_text'])
