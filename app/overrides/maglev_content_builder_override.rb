types = ::Maglev::Content::Builder::TYPES.dup
::Maglev::Content::Builder.send(:remove_const, :TYPES)

::Maglev::Content::Builder::TYPES = types.merge({
  enhanced_text: Custom::Content::EnhancedText
})
