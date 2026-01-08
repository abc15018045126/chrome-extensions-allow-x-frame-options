
param (
    [string]$sourcePath,
    [string]$destDir
)

Add-Type -AssemblyName System.Drawing

function Resize-Image {
    param (
        [string]$Path,
        [int]$Width,
        [int]$Height,
        [string]$Output
    )
    $img = [System.Drawing.Image]::FromFile($Path)
    $bmp = New-Object System.Drawing.Bitmap($Width, $Height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    
    $g.DrawImage($img, 0, 0, $Width, $Height)
    
    $bmp.Save($Output, [System.Drawing.Imaging.ImageFormat]::Png)
    
    $g.Dispose()
    $bmp.Dispose()
    $img.Dispose()
}

$sizes = @(16, 48, 128)
foreach ($size in $sizes) {
    $outPath = Join-Path $destDir "icon$size.png"
    Write-Host "Resizing to $size x $size -> $outPath"
    Resize-Image -Path $sourcePath -Width $size -Height $size -Output $outPath
}
